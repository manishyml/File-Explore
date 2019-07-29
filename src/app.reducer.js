const initialState = {
   pathFlow: [],
   rootFolder: [
      {
         filename: 'index.html',
         filetype: 'file',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019'
      },
      {
         filename: 'dirA',
         filetype: 'folder',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019',
         directoryContent: [
            {
               filename: 'index.html',
               filetype: 'file',
               size: '542kb',
               creator: 'Manish',
               date: '24Aug, 2019'
            }
         ]
      },
      {
         filename: 'dirB',
         filetype: 'folder',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019',
         directoryContent: [
            {
               filename: 'index.html',
               filetype: 'file',
               size: '542kb',
               creator: 'Manish',
               date: '24Aug, 2019'
            },
            {
               filename: 'index.html',
               filetype: 'file',
               size: '542kb',
               creator: 'Manish',
               date: '24Aug, 2019'
            }
         ]
      }
   ],

   folderList: [
      {
         filename: 'index.html',
         filetype: 'file',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019'
      },
      {
         filename: 'dirA',
         filetype: 'folder',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019',
         directoryContent: [
            {
               filename: 'index.html',
               filetype: 'file',
               size: '542kb',
               creator: 'Manish',
               date: '24Aug, 2019'
            }
         ]
      },
      {
         filename: 'dirB',
         filetype: 'folder',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019',
         directoryContent: [
            {
               filename: 'index.html',
               filetype: 'file',
               size: '542kb',
               creator: 'Manish',
               date: '24Aug, 2019'
            },
            {
               filename: 'index.html',
               filetype: 'file',
               size: '542kb',
               creator: 'Manish',
               date: '24Aug, 2019'
            }
         ]
      }
   ],
   moviesFolder: [
      {
         filename: 'dirZ',
         filetype: 'folder',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019',
         directoryContent: [
            {
               filename: 'index.html',
               filetype: 'file',
               size: '542kb',
               creator: 'Manish',
               date: '24Aug, 2019'
            }
         ]
      },
      {
         filename: 'xyz.mp4',
         filetype: 'file',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019'
      }
   ],
   videosFolder: [
      {
         filename: 'dirY',
         filetype: 'folder',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019',
         directoryContent: [
            {
               filename: 'index.html',
               filetype: 'file',
               size: '542kb',
               creator: 'Manish',
               date: '24Aug, 2019'
            }
         ]
      },
      {
         filename: 'xyz.mp4',
         filetype: 'file',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019'
      },
      {
         filename: 'xyz.mp4',
         filetype: 'file',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019'
      }
   ],
   songsFolder: [
      {
         filename: 'dirX',
         filetype: 'folder',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019',
         parentDir: 'Songs',
         directoryContent: [
            {
               filename: 'index.html',
               filetype: 'file',
               size: '542kb',
               creator: 'Manish',
               date: '24Aug, 2019',
               parentDir: 'dirX'
            }
         ]
      },
      {
         filename: 'xyz.mp3',
         filetype: 'file',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019'
      },
      {
         filename: 'abd.mp3',
         filetype: 'file',
         size: '542kb',
         creator: 'Manish',
         date: '24Aug, 2019'
      }
   ]
};
const reducer = (state, action) => {
   state = state || initialState;
   let newState;
   switch (action.type) {
      case 'UPDATE_FOLDERLIST':
         newState = Object.assign({}, state);
         newState.folderList = action.data;
         return newState;
      case 'PUSH_DATA_TO_SONGS':
         newState = Object.assign({}, state);
         newState.songsFolder = action.data;
         return newState;
      case 'PUSH_DATA_TO_MOVIES':
         newState = Object.assign({}, state);
         newState.moviesFolder = action.data;
         return newState;
      case 'PUSH_DATA_TO_VIDEOS':
         newState = Object.assign({}, state);
         newState.videosFolder = action.data;
         return newState;
      case 'PUSH_DATA_TO_ROOT':
         newState = Object.assign({}, state);
         newState.rootFolder = action.data;
         return newState;
      default:
         return state;
   }
};
export default reducer;
