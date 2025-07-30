import React from 'react';
import { motion } from 'framer-motion';
import { Play, X, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';

const DemoVideo = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  React.useEffect(() => {
    if (isOpen && videoRef.current) {
      // Auto-play when modal opens
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" className="bg-black">
      <div className="relative bg-black rounded-lg overflow-hidden">
        {/* Video Element */}
        <div className="relative aspect-video bg-gray-900">
          {/* Placeholder for actual video - using a gradient background for demo */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold mb-2">ADmyBRAND AI Suite Demo</h3>
                <p className="text-gray-300">Experience the power of AI-driven marketing</p>
              </div>
            </div>
          </div>

          {/* Video would go here in a real implementation */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-0"
            muted={isMuted}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            {/* Video sources would be added here */}
            <source src="/demo-video.mp4" type="video/mp4" />
          </video>

          {/* Play/Pause Overlay */}
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
              onClick={togglePlay}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Play className="w-8 h-8 text-black ml-1" />
              </motion.div>
            </motion.div>
          )}

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={togglePlay}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? (
                    <div className="w-4 h-4 bg-white"></div>
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="text-white hover:bg-white/20"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </Button>

                <div className="text-white text-sm">
                  ADmyBRAND AI Suite - Product Demo
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFullscreen}
                  className="text-white hover:bg-white/20"
                >
                  {isFullscreen ? (
                    <Minimize className="w-4 h-4" />
                  ) : (
                    <Maximize className="w-4 h-4" />
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Information */}
        <div className="p-6 bg-gray-900 text-white">
          <h3 className="text-xl font-semibold mb-2">
            See ADmyBRAND AI Suite in Action
          </h3>
          <p className="text-gray-300 mb-4">
            Watch how our AI-powered platform transforms marketing workflows, 
            from content creation to campaign optimization, in just minutes.
          </p>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400">5 min</div>
              <div className="text-sm text-gray-400">Demo Length</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">6</div>
              <div className="text-sm text-gray-400">Key Features</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">Live</div>
              <div className="text-sm text-gray-400">Real Platform</div>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <Button variant="gradient" className="flex-1">
              Start Free Trial
            </Button>
            <Button variant="outline" className="flex-1 border-gray-600 text-white hover:bg-gray-800">
              Schedule Live Demo
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

// Demo Video Trigger Component
export const DemoVideoTrigger = ({ className = "" }) => {
  const [showDemo, setShowDemo] = React.useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="xl"
        className={`group ${className}`}
        onClick={() => setShowDemo(true)}
      >
        <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
        Watch Demo
      </Button>
      
      <DemoVideo 
        isOpen={showDemo} 
        onClose={() => setShowDemo(false)} 
      />
    </>
  );
};

export default DemoVideo;

