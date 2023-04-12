import { ChangeEvent } from "react";

export type DeleteSingleBookingModalProps = {
    show: boolean;
    onHide: () => void;
    user: { date: string; name: string; roomId: number; password: string; };
    delete: (e: any) =>  void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    errorMessage: string;
  };