/**
 * Интерфейс конфигурации
 *
 * @author Власов И.А.
 * @public
 */
interface IConfig {
  /**
   * URL API сервера
   */
  API_URL: string

  /**
   * Режим работы приложения
   */
  MODE: 'development' | 'production' | 'test'
}

const config: IConfig = {
  API_URL: import.meta.env.VITE_APP_API_URL || 'http://localhost:10000',
  MODE: import.meta.env.NODE_ENV || 'development',
}

export default config
