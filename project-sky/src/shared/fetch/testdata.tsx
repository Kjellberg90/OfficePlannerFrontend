import data from '../Test data/testdata.json'

export const loadRoomData = () => {
    const rooms = {
        jsonRoomData: data.rooms
    };
    return rooms;
}

export const loadGroupData = () => {
    const groups = {
        jsonGroupData: data.groups
    };
    return groups;
}

// GET-request som inte funkade att köra med en lokal fil
// export async function getRooms() {
//  try {
//     const response = await fetch('../Test data/testdata.json', {
//         method: 'GET',
//         headers: {
//             Accept: 'application/json'
//         },
//     });

//     if(!response.ok) {
//         throw new Error(`Error! Status: ${response.status}`);
//     }
    
//     const result = (await response.json()) as GetRoomsResp;
//     console.log('result is: ', JSON.stringify(result, null, 4));

//     return result;
//  } catch (error) {
//     if (error instanceof Error) {
//         console.log('Error message: ', error.message);
//         return error.message;
//     } else {
//         console.log('unexpected error: ', error);
//         return 'Somwething went wrong';
//     }
//  }
// }

