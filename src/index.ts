// import { Server } from 'socket.io'

// export default {
//   register(/* { strapi }: { strapi: Strapi } */) {},

//   bootstrap(/*{ strapi }: { strapi: Strapi }*/) {
//     const io = new Server(strapi.server.httpServer, {
//       cors: {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST'],
//         credentials: true,
//       },
//     })

//     io.on('connection', (socket) => {
//       console.log('User connected')

//       socket.on('message', async ({ message, userId }) => {
//         try {
//           // Store message in Strapi database with user reference
//           const savedMessage = await strapi.entityService.create(
//             'api::message.message',
//             {
//               data: {
//                 text: message,
//                 user: userId, // Associate message with user
//               },
//             },
//           )

//           // Fetch user details for the response
//           const user = await strapi.entityService.findOne(
//             'plugin::users-permissions.user',
//             userId,
//             {
//               fields: ['username', 'email'],
//             },
//           )

//           // Send the saved message back with user details
//           io.emit('response', {
//             text: savedMessage.text,
//             user: user.username,
//             userId: userId,
//             timestamp: savedMessage.createdAt,
//           })

//           console.log('Message saved:', savedMessage)
//         } catch (error) {
//           console.error('Error saving message:', error)
//         }
//       })

//       socket.on('disconnect', () => {
//         console.log('User disconnected')
//       })
//     })
//   },
// }

// src/index.ts
// import type { Strapi } from '@strapi/strapi/__types';
import { Server } from 'socket.io'

export default {
  register(/* { strapi }: { strapi: Strapi } */) {},

  bootstrap(/*{ strapi }: { strapi: Strapi }*/) {
    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true,
      },
    })

    io.on('connection', (socket) => {
      console.log('User connected')

      socket.on('message', async ({ message, userId }) => {
        console.log(message, userId)
        try {
          // Save user's message
          const userMessage = await strapi.entityService.create(
            'api::message.message',
            {
              data: {
                text: message,
                user: userId,
                isFromServer: false,
              },
            },
          )

          // Create and save server's response
          const serverResponse = await strapi.entityService.create(
            'api::message.message',
            {
              data: {
                text: message, // Echo the same message
                user: userId, // Associate with the same user
                isFromServer: true,
              },
            },
          )

          // Fetch user details
          const user = await strapi.entityService.findOne(
            'plugin::users-permissions.user',
            userId,
            { fields: ['username'] },
          )

          // Emit both messages back to the client
          socket.emit('response', {
            userMessage: {
              id: userMessage.id,
              text: userMessage.text,
              user: user.username,
              userId: userId,
              timestamp: userMessage.createdAt,
              isFromServer: false,
            },
            serverResponse: {
              id: serverResponse.id,
              text: serverResponse.text,
              user: 'Server',
              userId: null,
              timestamp: serverResponse.createdAt,
              isFromServer: true,
            },
          })

          console.log('Messages saved:', { userMessage, serverResponse })
        } catch (error) {
          console.error('Error handling message:', error)
        }
      })

      socket.on('disconnect', () => {
        console.log('User disconnected')
      })
    })
  },
}
