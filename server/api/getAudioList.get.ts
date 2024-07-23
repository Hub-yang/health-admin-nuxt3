import qiniu from 'qiniu'

export default defineEventHandler((event) => {
  const Auth = {
    accessKey: 'r3CwCv7H2L_g_jj6Mbtm9MPf29Dv_ZPb9hK2u-t6',
    secretKey: 'M_Kqc28-y6enUGM3W4YjIPZYjJC6yiS3smkZvJFW',
    bucket: 'personal-web-photo',
  }

  const mac = new qiniu.auth.digest.Mac(Auth.accessKey, Auth.secretKey)
  const config = new qiniu.conf.Config()
  const bucketManager = new qiniu.rs.BucketManager(mac, config)

  // 获取指定前缀文件列表
  const { prefix } = getQuery(event)
  const bucket = Auth.bucket
  const options: any = {
    // limit: 10,
    prefix,
  }

  const baseURL = 'https://www.huberyyang.site/'
  function handleData(data: anyKey[]) {
    if (!data || !data.length)
      return []

    return data.slice(1).map((item: anyKey) => {
      const album = '启示录'
      const key = item.key
      const playTitle = key.split('/')[2].replace('.flac', '').split('-')[1]
      const playUrl = baseURL + encodeURI(key)
      const player = key.split('/')[1]
      const cover = `${baseURL}covers/${encodeURI(`${player}/${album}`)}.jpg`
      return {
        playUrl,
        playTitle,
        player,
        cover,
      }
    })
  }

  return new Promise((resolve, reject) => {
    bucketManager.listPrefix(bucket, options, (_, respBody, respInfo) => {
      if (respInfo.statusCode === 200) {
        const res = handleData(respBody.items)
        resolve(res)
      }
      else { reject(new Error('no data')) }
    })
  })
})
