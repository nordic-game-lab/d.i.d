window.CookieConsent.init({
    // More link URL on bar.
    modalMainTextMoreLink: "//policies.nordicgamelab.org/privacy",
    // How long to wait until bar comes up.
    barTimeout: 1000,
    // Look and feel.
    theme: {
      barColor: '#2C7CBF',
      barTextColor: '#FFF',
      barMainButtonColor: '#FFF',
      barMainButtonTextColor: '#2C7CBF',
      modalMainButtonColor: '#4285F4',
      modalMainButtonTextColor: '#FFF',
    },
    language: {
      // Current language.
      current: 'en',
      locale: {
        en: {
          barMainText: 'This website uses cookies to ensure you get the best experience on our website.',
          closeAriaLabel: 'close',
          barLinkSetting: 'Cookie Settings',
          barBtnAcceptAll: 'Accept all cookies',
          modalMainTitle: 'Cookie settings',
          modalMainText: 'Cookies are small pieces of data sent from a website and stored on the user\'s computer by the user\'s web browser while the user is browsing. Your browser stores each message in a small file, called cookie. When you request another page from the server, your browser sends the cookie back to the server. Cookies were designed to be a reliable mechanism for websites to remember information or to record the user\'s browsing activity.',
          modalBtnSave: 'Save current settings',
          modalBtnAcceptAll: 'Accept all cookies and close',
          modalAffectedSolutions: 'Affected solutions:',
          learnMore: 'Learn More',
          on: 'On',
          off: 'Off',
          enabled: 'is enabled.',
          disabled: 'is disabled.',
          checked: 'checked',
          unchecked: 'unchecked',
        }
      }
    },
    // List all the categories you want to display.
    categories: {
      // Unique name.
      // This probably will be the default category.
      necessary: {
        // The cookies here are necessary and category can't be turned off.
        // Wanted config value will be ignored.
        needed: true,
        // The cookies in this category will be let trough.
        // This probably should be false if category not necessary.
        wanted: true,
        // If checkbox is on or off at first run.
        checked: true,
        // Language settings for categories.
        language: {
          locale: {
            en: {
              name: 'Strictly Necessary Cookies',
              description: 'These items are required to enable basic website functionality.',
            }
          }
        }
      },
      analytics: {
          needed: false,
          wanted: false,
          checked: true,
          language: {
              locale: {
                  en: {
                      name: 'Analytics',
                      description: 'These items help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues. This storage type usually does not collect information that identifies a visitor.'
                  }
              }
          }
      },
      marketing: {
        needed: false,
        wanted: false,
        checked: true,
        language: {
            locale: {
                en: {
                    name: 'Marketing',
                    description: 'marketing cookies play a significant role in personalizing user experiences and delivering targeted advertisements.'
                }
            }
        }
      },
      ab_testing: {
          needed: true,
          wanted: true,
          checked: true,
          language: {
              locale: {
                  en: {
                      name: 'A B testing',
                      description: 'A/B testing (also known as split testing or bucket testing) is a methodology for comparing two versions of a webpage or app against each other to determine which one performs better.'
                  }
              }
          }
      },
  },
      // List actual services here.
    services: {
      // Unique name.
      google_analytics: {
        category: 'analytics',
        type: 'dynamic-script',
        search: 'analytics',
        cookies: [
          {
            name: '_gid',
            domain: `.${window.location.hostname}`
          },
          {
            name: /^_ga.*/,
            domain: `.${window.location.hostname}`
          }
        ],
        language: {
          locale: {
            en: {
              name: 'Google Analytics'
            }
          }
        }
      },
      google_ads: {
        category: 'marketing',
        type: 'dynamic-script',
        search: 'marketing',
        cookies: [
          {
            name: /^_gcl.*/,
            domain: `.${window.location.hostname}`
          }
        ],
        language: {
          locale: {
            en: {
              name: 'Google Ads'
            }
          }
        }
      },
      hubspot: {
        category: 'marketing',
        type: 'dynamic-script',
        search: 'marketing',
        cookies: [
          {
            name: '__hstc',
            domain: `.${window.location.hostname}`
          },
          {
            name: 'hubspotutk',
            domain: `.${window.location.hostname}`
          }
        ],
        language: {
          locale: {
            en: {
              name: 'Hubspot'
            }
          }
        }
      },
      posthog: {
        category: 'marketing',
        type: 'dynamic-script',
        search: 'marketing',
        cookies: [
          {
            name: /^ph_phc.*/,
            domain: `.${window.location.hostname}`
          }
        ],
        language: {
          locale: {
            en: {
              name: 'PostHog'
            }
          }
        }
      },
      ab_testing: {
          category: 'ab_testing',
          type: 'dynamic-script',
          search: 'nf_ab',
          cookies: [
            {
              name: 'nf_ab',
              domain: `.${window.location.hostname}`
            }
          ],
          language: {
            locale: {
              en: {
                name: 'Netlify split testing'
              }
            }
          }
        }
    }
  });