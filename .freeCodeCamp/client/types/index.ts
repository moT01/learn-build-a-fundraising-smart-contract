export type F<A, R> = (arg: A) => R;

export enum Events {
  CONNECT = "connect",
  DISCONNECT = "disconnect",
  TOGGLE_LOADER_ANIMATION = "toggle-loader-animation",
  UPDATE_TESTS = "update-tests",
  UPDATE_TEST = "update-test",
  UPDATE_DESCRIPTION = "update-description",
  UPDATE_PROJECT_HEADING = "update-project-heading",
  RESET_TESTS = "reset-tests",
  RUN_TESTS = "run-tests",
  RESET_PROJECT = "reset-project",
  GO_TO_NEXT_LESSON = "go-to-next-lesson",
  GO_TO_PREVIOUS_LESSON = "go-to-previous-lesson",
}

export type TestType = {
  testText: string;
  passed: boolean;
  isLoading: boolean;
  testId: number;
};
