import { ReleaseClient } from 'nx/release';

const release = async () => {
  const client = new ReleaseClient({
    changelog: {
      projectChangelogs: true,
      automaticFromRef: true,
    },
    projectsRelationship: 'independent',
    projects: ['packages/*', 'apps/*', 'hass-blocks-addon'],
    version: {
      conventionalCommits: true,
    },
  });

  const { projectsVersionData } = await client.releaseVersion({
    verbose: true,
  });

  await client.releaseChangelog({
    versionData: projectsVersionData,
    verbose: true,
  });

  await client.releasePublish({
    projects: ['packages/*'],
    verbose: true,
  });
};

release().catch((error) => console.log(error));
