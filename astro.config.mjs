import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'CommandKit',
      social: {
        github: 'https://github.com/notunderctrl/commandkit',
        discord: 'https://discord.underctrl.io',
        youtube: 'https://youtube.com/@UnderCtrl',
      },
      sidebar: [
        { label: 'Overview', link: '/overview' },
        {
          label: 'Guides',
          items: [
            { label: 'Installation', link: '/guides/installation' },
            { label: 'CommandKit Setup', link: '/guides/commandkit-setup' },
            { label: 'Commands Setup', link: '/guides/command-file-setup' },
            { label: 'Events Setup', link: '/guides/event-file-setup' },
            { label: 'Validations Setup', link: '/guides/validation-file-setup' },
          ],
        },
        {
          label: 'Documentation',
          items: [{ label: 'Introduction', link: '/docs/introduction' }],
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
