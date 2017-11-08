interface AppState {
  isStarted: boolean;
  waitTime: number;
}

interface BeginButtonProps {
  onClick: () => void;
}

interface MyButtonProps {
  waitTime: number;
}

interface MyButtonState {
  canClick: boolean;
  waitTime: number;
  startTime?: Date;
  endTime?: Date;
}