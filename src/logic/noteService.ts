export interface Note {
  text: string;
}

export const get = (): Note[] => {
  return [
    {
      text: "test Notiz"
    }
  ];
};
