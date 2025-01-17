import * as prismic from '@prismicio/client';

const repositoryName = 'deborapascotto';

export const client = prismic.createClient(`https://${repositoryName}.cdn.prismic.io/api/v2`, {
  accessToken: 'MC5aMlNQMGhBQUFDUUE4VnJy.YQ49Su-_vRTvv73vv73vv73vv70AZmslNGkS77-9cRzvv71O77-9QxZL77-977-9HBnvv70u', 
});