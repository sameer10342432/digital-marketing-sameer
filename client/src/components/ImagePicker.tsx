import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image as ImageIcon, Upload, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImagePickerProps {
  value: string;
  onChange: (value: string) => void;
}

const AVAILABLE_IMAGES = [
  { name: 'Blog Analytics', path: '/attached_assets/generated_images/Blog_featured_image_analytics_f5a6981a.png' },
  { name: 'Content Marketing', path: '/attached_assets/generated_images/Content_marketing_blog_image_555c248e.png' },
  { name: 'E-commerce Case Study', path: '/attached_assets/generated_images/E-commerce_case_study_visual_0d25472d.png' },
  { name: 'Hero Workspace', path: '/attached_assets/generated_images/Hero_workspace_background_image_1d138be9.png' },
  { name: 'PPC Campaign', path: '/attached_assets/generated_images/PPC_campaign_case_study_e769767e.png' },
  { name: 'Professional Headshot', path: '/attached_assets/generated_images/Professional_headshot_photo_f68f5765.png' },
  { name: 'SEO Project', path: '/attached_assets/generated_images/SEO_project_visual_b20d6e80.png' },
  { name: 'Social Media Campaign', path: '/attached_assets/generated_images/Social_media_campaign_visual_941ce000.png' },
];

export function ImagePicker({ value, onChange }: ImagePickerProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [customUrl, setCustomUrl] = useState(value);
  const [uploading, setUploading] = useState(false);
  const [uploadedPreview, setUploadedPreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectImage = (imagePath: string) => {
    onChange(imagePath);
    setOpen(false);
  };

  const handleCustomUrl = () => {
    onChange(customUrl);
    setOpen(false);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: 'Error',
        description: 'File size must be less than 5MB',
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: 'Error',
          description: data.message || 'Failed to upload image',
          variant: 'destructive',
        });
        return;
      }

      setUploadedPreview(data.url);
      onChange(data.url);
      toast({
        title: 'Success',
        description: 'Image uploaded successfully',
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to upload image',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Image URL or path"
        />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button type="button" variant="outline">
              <ImageIcon className="h-4 w-4 mr-2" />
              Browse
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Choose Image</DialogTitle>
              <DialogDescription>
                Select from available images or enter a custom URL
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upload">Upload</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="custom">Custom URL</TabsTrigger>
              </TabsList>
              <TabsContent value="upload" className="space-y-4">
                <div className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      data-testid="input-file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      {uploading ? (
                        <Loader2 className="h-12 w-12 animate-spin text-muted-foreground" />
                      ) : (
                        <Upload className="h-12 w-12 text-muted-foreground" />
                      )}
                      <div className="text-sm text-muted-foreground">
                        {uploading ? 'Uploading...' : 'Click to upload an image'}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        PNG, JPG, GIF or WEBP (max 5MB)
                      </div>
                    </label>
                  </div>
                  {uploadedPreview && (
                    <div className="border rounded-lg p-2">
                      <img
                        src={uploadedPreview}
                        alt="Uploaded preview"
                        className="w-full h-48 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="gallery" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {AVAILABLE_IMAGES.map((image) => (
                    <button
                      key={image.path}
                      type="button"
                      onClick={() => handleSelectImage(image.path)}
                      className="group relative overflow-hidden rounded-lg border-2 border-transparent hover:border-primary transition-all"
                    >
                      <img
                        src={image.path}
                        alt={image.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium">{image.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="custom" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="custom-url">Image URL</Label>
                    <Input
                      id="custom-url"
                      placeholder="https://example.com/image.jpg"
                      value={customUrl}
                      onChange={(e) => setCustomUrl(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleCustomUrl();
                        }
                      }}
                    />
                  </div>
                  {customUrl && (
                    <div className="border rounded-lg p-2">
                      <img
                        src={customUrl}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <Button onClick={handleCustomUrl} className="w-full">
                    Use This URL
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
      {value && (
        <div className="border rounded-lg p-2">
          <img
            src={value}
            alt="Selected"
            className="w-full h-32 object-cover rounded"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      )}
    </div>
  );
}
