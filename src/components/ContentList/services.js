export const calculateNextStatus = (status, action) => {
  if (!['create', 'update', 'delete', 'undelete', 'sync'].includes(action)) {
    throw new Error(`Invalid action "${action}"!`)
  }
  // eslint-disable-next-line default-case
  switch (status) {
    case null:
      // eslint-disable-next-line default-case
      switch (action) {
        case 'create': return 'created'
      } break
    case 'created':
      // eslint-disable-next-line default-case
      switch (action) {
        case 'update': return 'created'
        case 'delete': return null
        case 'sync': return 'synced'
      } break
    case 'synced':
      // eslint-disable-next-line default-case
      switch (action) {
        case 'update': return 'updated'
        case 'delete': return 'deleted'
        case 'sync': return 'synced'
      } break
    case 'updated':
    // eslint-disable-next-line default-case
      switch (action) {
        case 'update': return 'updated'
        case 'delete': return 'updatedeleted'
        case 'sync': return 'synced'
      } break
    case 'deleted':
    // eslint-disable-next-line default-case
      switch (action) {
        case 'undelete': return 'synced'
        case 'sync': return null
      } break
    case 'updatedeleted':
    // eslint-disable-next-line default-case
      switch (action) {
        case 'undelete': return 'updated'
        case 'sync': return null
      }
  }
  throw new Error(`Invalid action "${action}" on content with status "${status}"!`)
}
