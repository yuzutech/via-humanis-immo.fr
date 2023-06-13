import {fileURLToPath, URL} from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'
import * as constants from 'node:constants'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const baseDirectory  = path.join(__dirname, '..')

const immogicDirectory = path.join(baseDirectory, 'immogic')
const vhiDirectory = path.join(baseDirectory, 'via-humanis-immo')

async function exists(dir) {
  try {
    await fs.access(dir, constants.R_OK | constants.W_OK);
    return true
  } catch {
    return false
  }
}

async function copyImages(dir) {
  const directoryExists = await exists(dir)
  if (directoryExists) {
    try {
      const images = await fs.readdir(dir)
      for (const image of images) {
        if (image.startsWith('E643-')) {
          await fs.copyFile(path.join(dir, image), path.join(baseDirectory, 'public', 'data', 'pericles', 'images', image))
        }
      }
    } catch (err) {
      console.log(`Unable to copy images, ignoring...`, {err})
    }
  }
}

await copyImages(immogicDirectory)
await copyImages(vhiDirectory)
