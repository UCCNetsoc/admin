export interface Config {
  apiBaseUrl: string;
  oidcAuthority: string;
  hCaptchaSiteKey: string;
  sshUrl: string;
  sftpUrl: string;
}

// TODO: change defaults to netsoc.co
export const config: Config = {
  apiBaseUrl: process.env.VUE_APP_NETSOC_API_URL.replace(
    new RegExp('[/]+$'),
    ''
  ),
  oidcAuthority: process.env.VUE_APP_OIDC_AUTHORITY,
  hCaptchaSiteKey: process.env.VUE_APP_HCAPTCHA_SITE_KEY ?? '',
  sshUrl: process.env.VUE_APP_SSH_URL,
  sftpUrl: process.env.VUE_APP_SFTP_URL
}
