import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import {
  Heading1,
  Heading2,
  Heading3,
  Bold,
  Italic,
  List,
  ListOrdered,
  Image as ImageIcon,
  Eye,
  EyeOff,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { renderMarkdown } from '@/lib/markdown';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertAtCursor = (before: string, after: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText =
      value.substring(0, start) +
      before +
      selectedText +
      after +
      value.substring(end);

    onChange(newText);

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + before.length + selectedText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const insertHeading = (level: 1 | 2 | 3) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const hashes = '#'.repeat(level);
    
    const lineStart = value.lastIndexOf('\n', start - 1) + 1;
    const lineEnd = value.indexOf('\n', end);
    const actualLineEnd = lineEnd === -1 ? value.length : lineEnd;
    const currentLine = value.substring(lineStart, actualLineEnd);
    
    const trimmedLine = currentLine.replace(/^#+\s*/, '');
    const newLine = `${hashes} ${trimmedLine || selectedText || 'Heading text'}`;
    
    const newText = value.substring(0, lineStart) + newLine + value.substring(actualLineEnd);
    
    onChange(newText);
    
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = lineStart + newLine.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const insertBold = () => {
    insertAtCursor('**', '**');
  };

  const insertItalic = () => {
    insertAtCursor('*', '*');
  };

  const insertList = () => {
    insertAtCursor('\n- ', '\n');
  };

  const insertOrderedList = () => {
    insertAtCursor('\n1. ', '\n');
  };

  const insertImage = () => {
    if (imageUrl.trim()) {
      insertAtCursor(`\n![Image](${imageUrl})\n`);
      setImageUrl('');
      setImageDialogOpen(false);
    }
  };


  return (
    <div className="space-y-4">
      <Card className="p-2 flex flex-wrap gap-2 border-b">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(1)}
          title="Heading 1"
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(2)}
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(3)}
          title="Heading 3"
        >
          <Heading3 className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-border" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={insertBold}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={insertItalic}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-border" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={insertList}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={insertOrderedList}
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-border" />
        <Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
          <DialogTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              title="Insert Image"
            >
              <ImageIcon className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Insert Image</DialogTitle>
              <DialogDescription>
                Enter the image URL or path
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    insertImage();
                  }
                }}
              />
              <Button onClick={insertImage} className="w-full">
                Insert
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <div className="flex-1" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setShowPreview(!showPreview)}
          title={showPreview ? 'Hide Preview' : 'Show Preview'}
        >
          {showPreview ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </Card>

      {showPreview ? (
        <Card className="p-4 min-h-[300px] prose prose-sm max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
          />
        </Card>
      ) : (
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={12}
          className="font-mono text-sm"
        />
      )}

      <div className="text-xs text-muted-foreground space-y-1">
        <p className="font-medium">Tips for creating great blog content:</p>
        <ul className="list-disc list-inside space-y-0.5">
          <li>Click heading buttons to convert current line to headings (H1, H2, H3)</li>
          <li>Select text and click Bold or Italic to format it</li>
          <li>Use Preview button to see how your content will look</li>
          <li>Markdown syntax: **bold**, *italic*, - lists, ![alt](url) for images</li>
        </ul>
      </div>
    </div>
  );
}
