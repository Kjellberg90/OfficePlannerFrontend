import { ChangeEvent } from "react";
import Groups from "../../Groups/GroupInterfaces/groupsInterface";

export interface AdminRoom {
  id: number;
  name: string;
  seats: number;
}

export type AdminGroup = {
    id: number;
    name: string;
  }
  
export type AdminBookingProps = {
    id: number;
    date: string;
    groupName: string;
    roomName: string;
  }
  
export type AddBookingModalProps = {
    show: boolean;
    onHide: () => void;
    adminGroups: AdminGroup[];
    adminRooms: AdminRoom[];
    updatedvalue: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
    onSubmit: () => void;
  };
  
export type AdminDeleteBookingModalProps = {
    show: boolean;
    onHide: () => void;
    handleDelete: () => void;
    booking?: AdminBookingProps;
  }
  
export type EditBookingModalProps = {
    show: boolean;
    groups: Groups[];
    rooms: AdminRoom[];
    updatedvalue: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit: () => void;
    onHide: () => void;
  };