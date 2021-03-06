const { config, Group } = require('solapi')
const conf = require('../config')

/*
 solapi js example
 delete group
*/

config.init({
  apiKey: conf.apiKey,
  apiSecret: conf.apiSecret
})
deleteGroup()
async function deleteGroup () {
  try {
    const group = new Group()
    await group.createGroup()
    const groupId = group.getGroupId()
    console.log(await Group.deleteGroup(groupId))
  } catch (e) {
    console.log(e)
  }
}
