export interface SelectElement {
    icon: String;
    element: {
      requared?: Boolean;
      label?: String;
      position: String;
      textColor?: String;
      lableColor?: String;
      background?: String;
      type: String;
      width: Number;
      height: Number;
      fontSize?: Number;
      fontWeight?: String;
      borderWidth?: Number;
      borderColor?: String;
      borderType?: String;
      options?: String;
    };
  }