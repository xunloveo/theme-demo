import { App} from 'vue'
import { elementPlugin } from './element'

export const setupPlugins = (app: App) => app.use(elementPlugin)