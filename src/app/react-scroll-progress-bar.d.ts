declare module 'react-scroll-progress-bar' {
    interface ProgressBarProps {
      height?: string | number;
      bgcolor?: string;
      duration?: string | number;
    }
  
    const ProgressBar: React.FC<ProgressBarProps>;
    export default ProgressBar;
  }
  