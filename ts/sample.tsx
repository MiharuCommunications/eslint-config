import * as React from "react";


export interface SampleComponentProps {
}


export interface SampleComponentState {
}


export class SampleComponent extends React.Component<SampleComponentProps, SampleComponentState> {
  constructor(props: SampleComponentProps) {
    super(props);
  }

  componentDidMount(): void {
  }

  shouldComponentUpdate(nextProps: Readonly<SampleComponentProps>, nextState: Readonly<SampleComponentState>, nextContext: any): boolean {
    return true;
  }

  componentWillUnmount(): void {
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
  }

  render() {
    const items = [];

    return (
      <div>
        {items.map((item, i) =>
          <span key={i}></span>
        )}
      </div>
    );
  }
}
