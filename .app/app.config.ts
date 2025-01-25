export default defineAppConfig({
  nuxtIcon: {},
  tairo: {
    title: 'Yusuf Abdillah Putra Portfolio',
    error: {
      logo: {
        component: 'img',
        props: {
          src: '/img/illustrations/system/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto',
        },
      },
    },
    iconnav: {
      circularMenu: {
        enabled: false,
      },
      navigation: {
        enabled: true,
        logo: {
          component: 'TairoLogo',
          props: {class: 'text-primary-600 h-10 w-10'},
        },
        items: [
          {
            name: 'About',
            icon: {name: 'ph:identification-badge', class: 'w-6 h-6'},
            click: () => {}
          },
          {
            name: 'Skills',
            icon: {name: 'ph:list-star-fill', class: 'w-6 h-6'},
            click: () => {}
          },
          {
            name: 'Projects',
            icon: {name: 'ph:coffee', class: 'w-6 h-6'},
            click: () => {}
          },
          {
            name: 'Experiences',
            icon: {name: 'ph:suitcase-simple', class: 'w-6 h-6'},
            click: () => {}
          },
          {
            name: 'Color',
            icon: {name: 'ph:drop-half-bottom-duotone', class: 'w-6 h-6'},
            click: () => {
              const isSwitcherOpen = useState('switcher-open', () => false)
              isSwitcherOpen.value = true
            },
          },
        ],
      },
      toolbar: {
        enabled: true,
        showTitle: true,
        tools: [
          {
            component: 'ThemeToggle',
          },
        ],
      },
      footer: {
        enabled: true,
        logoSeparator: {
          component: 'TairoLogo',
          props: {class: 'text-primary-500 h-7 w-7'},
        },
        logo: {
          component: 'TairoLogoText',
          props: {
            class:
              'text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0',
          },
        },
        copyright: {
          name: 'Yusuf Abdillah Putra',
          since: '2018',
        },
        links: [
          {
            name: 'Instagram',
            to: 'https://www.instagram.com/yusufabdillahputra/',
            rel: 'noopener',
            target: '_blank',
          },
          {
            name: 'Linkedin',
            to: 'https://www.linkedin.com/in/yusufabdillahputra/',
            rel: 'noopener',
            target: '_blank',
          },
        ],
      },
    },
  },

})
