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

// ADMIN ROOM MODAL PROPS

export type AdminAddRoomModalProps = {
  show: boolean;
  onHide: () => void;
  onSubmit: () => void;
  updatedValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type AdminUpdateRoomModalProps = {
  show: boolean;
  onHide: () => void;
  onSubmit: () => void;
  updatedValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  roomName: string | undefined;
  seats: number | undefined;
}

export type AdminDeleteRoomModalProps = {
  show: boolean;
  onHide: () => void;
  handleDelete: () => void;
  room: AdminRoom | undefined;
}

// ADMIN GROUP MODAL PROPS 

export type AdminAddGroupModalProps = {
  show: boolean;
  onHide: () => void;
  onSubmit: () => void;
  updatedValue: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
}

export type AdminUpdateGroupModalProps = {
  show: boolean;
  onHide: () => void;
  onSubmit: () => void;
  updatedValue: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
  groupName: string | undefined;
  groupSize: number | undefined;
  groupDivision: string | undefined;
}

export type AdminDeleteGroupModalProps = {
  show: boolean;
  onHide: () => void;
  groupName: string | undefined;
  handleDelete: () => void;
}

// SINGLE BOOKING MODAL PROPS 
  
export type AdminBookingProps = {
    id: number;
    date: string;
    roomName: string;
    groupName: string;
  }
  
export type AddBookingModalProps = {
    show: boolean;
    onHide: () => void;
    onSubmit: () => void;
    updatedvalue: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
    adminRooms: AdminRoom[];
    adminGroups: AdminGroup[];
  };
  
export type AdminDeleteBookingModalProps = {
    show: boolean;
    onHide: () => void;
    booking?: AdminBookingProps;
    handleDelete: () => void;
  }
  
export type EditBookingModalProps = {
    show: boolean;
    onHide: () => void;
    onSubmit: () => void;
    updatedvalue: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    rooms: AdminRoom[];
    groups: Groups[];
  };

export type AdminDeleteAllBookingsModalProps = {
    show: boolean;
    onHide: () => void;
    handleDelete: () => void;
  }
