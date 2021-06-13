/*
 * @Author: your name
 * @Date: 2021-05-26 17:56:56
 * @LastEditTime: 2021-06-13 23:01:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin/admin-server/utils/log4j.js
 */
/**
 * @author 郑圳宏
 */
const log4js = require('log4js')
const levels = {
  'trace': log4js.levels.TRACE,
  'debug': log4js.levels.DEBUG,
  'info': log4js.levels.INFO,
  'warn': log4js.levels.WARN,
  'error': log4js.levels.ERROR,
  'fatal': log4js.levels.FATAL
}
log4js.configure({
  appenders: {
    console: { type: 'console' },
    info: {
      type: 'file',
      filename: 'logs/all-logs.log'
    },
    error: {
      type: 'dateFile',
      filename: 'logs/log',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true// 设置文件名称为 filename + pattern
    }
  },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
    info: {
      appenders: ['info', 'console'],
      level: 'info'
    },
    error: {
      appenders: ['error', 'console'],
      level: 'error'
    }
  }
})
/**
 * 日志输出 level为debug
 * @param {string} content
 */
exports.debug = (content) => {
  let logger = log4js.getLogger()
  logger.level = levels.debug
  logger.debug(content)
}
/**
 * 日志输出 level为info
 * @param {string} content
 */
exports.info = (content) => {
  let logger = log4js.getLogger('info')
  logger.level = levels.info
  logger.info(content)
}
/**
 * 日志输出 level为error
 * @param {string} content
 */
exports.error = (content) => {
  let logger = log4js.getLogger('error')
  logger.level = levels.debug
  logger.error(content)
}
