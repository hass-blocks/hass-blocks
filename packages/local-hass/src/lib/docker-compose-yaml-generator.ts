interface ContainerParams {
  configDir: string;
  dockerFileDir: string;
  port: number;
}
export const generateDockerCompose = ({
  configDir,
  dockerFileDir,
  port,
}: ContainerParams) => `
services:
    homeassistant:
        container_name: homeassistant
        build: ${dockerFileDir}
        volumes:
          - ${configDir}:/config
          - /etc/localtime:/etc/localtime:ro
        ports:
          - "${String(port)}:8123"
        restart: unless-stopped
        privileged: true
`;
