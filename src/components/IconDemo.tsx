import { Camera, Github, AlertCircle } from 'lucide-react';
export default function IconDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Camera className="w-6 h-6" />
      <Github className="w-6 h-6" />
      <AlertCircle className="w-6 h-6" />
      <span>Icons work!</span>
    </div>
  );
}