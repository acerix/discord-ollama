import { Event } from '../utils/index.js'
import interactionCreate from './interactionCreate.js'
import messageCreate from './messageCreate.js'
import messageUpdate from './messageUpdate.js'
import ready from './ready.js'
import threadDelete from './threadDelete.js'

// Centralized export for all events
export default [
    ready,
    messageCreate,
    messageUpdate,
    interactionCreate,
    threadDelete
] as Event[] // staticly is better ts practice, dynamic exporting is possible