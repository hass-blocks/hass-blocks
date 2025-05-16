## 3.14.0 (2025-05-16)

### 🚀 Features

- **core:** update core to support specific targets ([11259c4f](https://github.com/hass-blocks/hass-blocks/commit/11259c4f))
- **core:** add cli ([fe928f0b](https://github.com/hass-blocks/hass-blocks/commit/fe928f0b))
- **core:** add stuff to nodes ([ea3f10e0](https://github.com/hass-blocks/hass-blocks/commit/ea3f10e0))
- **core:** add areas to core ([e727c18e](https://github.com/hass-blocks/hass-blocks/commit/e727c18e))
- **core:** add target checking to all blocks ([af58551f](https://github.com/hass-blocks/hass-blocks/commit/af58551f))
- **core:** add fixable entities ([1ff26353](https://github.com/hass-blocks/hass-blocks/commit/1ff26353))
- **core:** fix broken import ([022245a7](https://github.com/hass-blocks/hass-blocks/commit/022245a7))
- **bens-flat:** change to support entity targets ([4ba2d185](https://github.com/hass-blocks/hass-blocks/commit/4ba2d185))
- **core:** validate service call targes on iniitialisation ([08c4490b](https://github.com/hass-blocks/hass-blocks/commit/08c4490b))
- **core:** export framework errors so custom blocks can throw them ([55f64adf](https://github.com/hass-blocks/hass-blocks/commit/55f64adf))
- **core:** add service-call validation ([a6a829d2](https://github.com/hass-blocks/hass-blocks/commit/a6a829d2))

### 🩹 Fixes

- **all:** type error ([79b6fdf3](https://github.com/hass-blocks/hass-blocks/commit/79b6fdf3))
- **all:** linting ([ef0c6021](https://github.com/hass-blocks/hass-blocks/commit/ef0c6021))
- **all:** linting ([3092b42d](https://github.com/hass-blocks/hass-blocks/commit/3092b42d))
- **core:** rename entity ([85081e4c](https://github.com/hass-blocks/hass-blocks/commit/85081e4c))
- **core:** corrected type errors ([66dee1e3](https://github.com/hass-blocks/hass-blocks/commit/66dee1e3))
- **core:** add better logging for missing entity errors ([42b112f1](https://github.com/hass-blocks/hass-blocks/commit/42b112f1))
- **many:** tweak packages to support codegen ([ef9d3971](https://github.com/hass-blocks/hass-blocks/commit/ef9d3971))
- **core:** remove the show module from core ([88d551e3](https://github.com/hass-blocks/hass-blocks/commit/88d551e3))
- **core:** update core to support the api changes in hass-ts ([9ac9fb6b](https://github.com/hass-blocks/hass-blocks/commit/9ac9fb6b))
- **core:** export trigger from core ([82621282](https://github.com/hass-blocks/hass-blocks/commit/82621282))
- **core:** allow entity ids that don't have domains ([62646176](https://github.com/hass-blocks/hass-blocks/commit/62646176))
- **core:** combination was adding empty arrays even for zero ids ([455c9c75](https://github.com/hass-blocks/hass-blocks/commit/455c9c75))
- **core:** fix circular dependencies ([19109fa3](https://github.com/hass-blocks/hass-blocks/commit/19109fa3))
- **core:** correct broken import ([58506192](https://github.com/hass-blocks/hass-blocks/commit/58506192))
- **core:** add triggers to the node graph ([c805f936](https://github.com/hass-blocks/hass-blocks/commit/c805f936))
- **core:** correct linting error ([399ca1bf](https://github.com/hass-blocks/hass-blocks/commit/399ca1bf))
- **core:** make targets optional ([795ff806](https://github.com/hass-blocks/hass-blocks/commit/795ff806))
- **core:** correct missing import ([90ae3189](https://github.com/hass-blocks/hass-blocks/commit/90ae3189))
- **core:** correctly validate service ([2c3c0f39](https://github.com/hass-blocks/hass-blocks/commit/2c3c0f39))
- **blocks:** renamed blocks to core ([e41a04f6](https://github.com/hass-blocks/hass-blocks/commit/e41a04f6))

### 🧱 Updated Dependencies

- Updated @hass-blocks/hass-ts to 0.11.1

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.13.2 (2025-05-03)

### 🩹 Fixes

- **blocks:** renamed blocks to core ([e41a04f6](https://github.com/hass-blocks/hass-blocks/commit/e41a04f6))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.13.1 (2025-05-03)

### 🩹 Fixes

- **blocks:** fix race condition in run queue ([83b7ff1](https://github.com/hass-blocks/hass-blocks/commit/83b7ff1))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.13.0 (2025-05-03)

### 🚀 Features

- **blocks:** log event type ([e5ddec0](https://github.com/hass-blocks/hass-blocks/commit/e5ddec0))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.12.0 (2025-05-03)

### 🚀 Features

- **blocks:** add trace logging of events ([dc25848](https://github.com/hass-blocks/hass-blocks/commit/dc25848))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.11.1 (2025-05-03)

### 🩹 Fixes

- **blocks:** don't need to update state cache for individual listeners ([0752fc0](https://github.com/hass-blocks/hass-blocks/commit/0752fc0))
- **blocks:** was not actually updating the state cache as new events were fired ([73892a5](https://github.com/hass-blocks/hass-blocks/commit/73892a5))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.11.0 (2025-05-02)

### 🚀 Features

- **blocks:** export a function that makes it easier to add tests ([ef2ce01](https://github.com/hass-blocks/hass-blocks/commit/ef2ce01))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.10.1 (2025-05-02)

### 🩹 Fixes

- **blocks:** only check for states at the start of register automations ([49b1dca](https://github.com/hass-blocks/hass-blocks/commit/49b1dca))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.10.0 (2025-05-02)

### 🚀 Features

- **blocks:** accept multiple automations ([c2c8bb5](https://github.com/hass-blocks/hass-blocks/commit/c2c8bb5))

### ❤️ Thank You

- Ben Wainwright

## 3.9.0 (2025-04-28)

### 🚀 Features

- **blocks:** test release ([93996e7](https://github.com/benwainwright/hass-blocks/commit/93996e7))

### 🧱 Updated Dependencies

- Updated @hass-blocks/hass-ts to 0.11.0

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.8.4 (2025-04-27)

### 🩹 Fixes

- **blocks:** fix error because states are not being loaded ([09901d3](https://github.com/benwainwright/hass-blocks/commit/09901d3))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.8.3 (2025-04-27)

### 🩹 Fixes

- **blocks:** include source in blocks ([f8a9ba9](https://github.com/benwainwright/hass-blocks/commit/f8a9ba9))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.8.2 (2025-04-27)

### 🧱 Updated Dependencies

- Updated @hass-blocks/hass-ts to 0.10.6

## 3.8.1 (2025-04-27)

### 🩹 Fixes

- **all:** make typescript as strict as possible ([b5471ef](https://github.com/benwainwright/hass-blocks/commit/b5471ef))

### 🧱 Updated Dependencies

- Updated @hass-blocks/hass-ts to 0.10.5

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.8.0 (2025-04-27)

### 🚀 Features

- **blocks:** convert all function properties to methods ([5a3885a](https://github.com/benwainwright/hass-blocks/commit/5a3885a))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.7.0 (2025-04-27)

### 🚀 Features

- **blocks:** add icons to default logger ([6df287e](https://github.com/benwainwright/hass-blocks/commit/6df287e))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.6.2 (2025-04-27)

### 🩹 Fixes

- **blocks:** correct broken log message ([a8e8597](https://github.com/benwainwright/hass-blocks/commit/a8e8597))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.6.1 (2025-04-27)

### 🩹 Fixes

- **blocks:** corrected initial log message ([ed4b670](https://github.com/benwainwright/hass-blocks/commit/ed4b670))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.6.0 (2025-04-27)

### 🚀 Features

- **blocks:** add initialisation block message ([afc8e63](https://github.com/benwainwright/hass-blocks/commit/afc8e63))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.5.0 (2025-04-27)

### 🚀 Features

- **blocks:** add logging ([e5d68af](https://github.com/benwainwright/hass-blocks/commit/e5d68af))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.4.7 (2025-04-25)

### 🩹 Fixes

- **blocks:** corrected export property again ([e4578e6](https://github.com/benwainwright/hass-blocks/commit/e4578e6))
- **blocks:** corrected export property ([a3f28cb](https://github.com/benwainwright/hass-blocks/commit/a3f28cb))

### 🧱 Updated Dependencies

- Updated @hass-blocks/hass-ts to 0.10.4

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.4.6 (2025-04-25)

### 🧱 Updated Dependencies

- Updated @hass-blocks/hass-ts to 0.10.3

## 3.4.5 (2025-04-25)

### 🩹 Fixes

- **blocks:** fixed broken import ([aa45287](https://github.com/benwainwright/hass-blocks/commit/aa45287))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.4.4 (2025-04-25)

### 🧱 Updated Dependencies

- Updated @hass-blocks/hass-ts to 0.10.2

## 3.4.3 (2025-04-25)

### 🩹 Fixes

- **blocks:** actually compile to js ([544316b](https://github.com/benwainwright/hass-blocks/commit/544316b))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.4.2 (2025-04-25)

### 🧱 Updated Dependencies

- Updated @hass-blocks/hass-ts to 0.10.1

## 3.4.1 (2025-04-24)

### 🩹 Fixes

- **docs:** tweak layout ([fc84331](https://github.com/benwainwright/hass-blocks/commit/fc84331))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.4.0 (2025-04-24)

### 🚀 Features

- **docs-site:** got docs working ([6659982](https://github.com/benwainwright/hass-blocks/commit/6659982))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.3.0 (2025-04-23)

### 🚀 Features

- **docs-site:** add astro ([bf48ce4](https://github.com/benwainwright/hass-blocks/commit/bf48ce4))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.2.0 (2025-04-21)

### 🚀 Features

- **docs:** build custom mdx docs pages ([a8ea1e9](https://github.com/benwainwright/hass-blocks/commit/a8ea1e9))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.1.0 (2025-04-20)

### 🚀 Features

- **docs:** add deployable docs site ([1b22b4a](https://github.com/benwainwright/hass-blocks/commit/1b22b4a))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 3.0.1 (2025-04-20)

### 🩹 Fixes

- **blocks:** correct name of package ([8a5945b](https://github.com/benwainwright/hass-blocks/commit/8a5945b))

### ❤️ Thank You

- Ben Wainwright @benwainwright

# 3.0.0 (2025-04-20)

### 🚀 Features

- **blocks:** add plugin loading ([eb1f19a](https://github.com/benwainwright/hass-blocks/commit/eb1f19a))
- ⚠️ **blocks:** swap lego for blocks ([17f29a4](https://github.com/benwainwright/hass-blocks/commit/17f29a4))
- ⚠️ **blocks:** make the dsl more intuitive ([54e1bac](https://github.com/benwainwright/hass-blocks/commit/54e1bac))
- **blocks:** update blocks to reference the monorepo version of hass-ts ([7afd53d](https://github.com/benwainwright/hass-blocks/commit/7afd53d))
- **hass-ts:** add hass-ts to monorepo ([94599e4](https://github.com/benwainwright/hass-blocks/commit/94599e4))

### 🩹 Fixes

- **ci:** sort out names and add api report for plugin ([3549d7e](https://github.com/benwainwright/hass-blocks/commit/3549d7e))
- **blocks:** fix broken import ([3df941e](https://github.com/benwainwright/hass-blocks/commit/3df941e))
- **blocks:** export some types and logging event ([0d1b314](https://github.com/benwainwright/hass-blocks/commit/0d1b314))
- **blocks:** export PluginArgs ([bad873a](https://github.com/benwainwright/hass-blocks/commit/bad873a))
- **blocks:** was overwriting the result of the parallel execution ([128d15a](https://github.com/benwainwright/hass-blocks/commit/128d15a))
- **blocks:** correct the broken types ([e72f46c](https://github.com/benwainwright/hass-blocks/commit/e72f46c))
- **blocks:** correct mistake in readme ([bf8788a](https://github.com/benwainwright/hass-blocks/commit/bf8788a))
- **blocks:** correct typing issue ([6c2bb29](https://github.com/benwainwright/hass-blocks/commit/6c2bb29))
- **blocks:** stuff ([39118bf](https://github.com/benwainwright/hass-blocks/commit/39118bf))
- **blocks:** put old hass back for now ([957a7fc](https://github.com/benwainwright/hass-blocks/commit/957a7fc))
- **blocks:** modify release ([c736a43](https://github.com/benwainwright/hass-blocks/commit/c736a43))

### ⚠️ Breaking Changes

- **blocks:** Changes all symbols that use the word 'Lego' to use
- **blocks:** changes props on the sequence functions

### 🧱 Updated Dependencies

- Updated @hass-blocks/hass-ts to 0.4.0

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 2.1.2 (2025-04-20)

### 🩹 Fixes

- **blocks:** export some types and logging event ([0d1b314](https://github.com/benwainwright/hass-blocks/commit/0d1b314))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 2.1.1 (2025-04-20)

### 🩹 Fixes

- **blocks:** export PluginArgs ([bad873a](https://github.com/benwainwright/hass-blocks/commit/bad873a))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 2.1.0 (2025-04-20)

### 🚀 Features

- **blocks:** add plugin loading ([eb1f19a](https://github.com/benwainwright/hass-blocks/commit/eb1f19a))

### ❤️ Thank You

- Ben Wainwright @benwainwright

# 2.0.0 (2025-04-19)

### 🚀 Features

- ⚠️ **blocks:** swap lego for blocks ([17f29a4](https://github.com/benwainwright/hass-blocks/commit/17f29a4))

### ⚠️ Breaking Changes

- **blocks:** Changes all symbols that use the word 'Lego' to use

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 1.0.3 (2025-04-18)

### 🩹 Fixes

- **blocks:** was overwriting the result of the parallel execution ([128d15a](https://github.com/benwainwright/hass-blocks/commit/128d15a))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 1.0.2 (2025-04-18)

### 🩹 Fixes

- **blocks:** correct the broken types ([e72f46c](https://github.com/benwainwright/hass-blocks/commit/e72f46c))
- **blocks:** correct mistake in readme ([bf8788a](https://github.com/benwainwright/hass-blocks/commit/bf8788a))
- **blocks:** correct typing issue ([6c2bb29](https://github.com/benwainwright/hass-blocks/commit/6c2bb29))

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 1.0.1 (2025-04-18)

### 🧱 Updated Dependencies

- Updated hass-ts to 0.3.2

# 1.0.0 (2025-04-18)

### 🚀 Features

- ⚠️ **blocks:** make the dsl more intuitive ([54e1bac](https://github.com/benwainwright/hass-blocks/commit/54e1bac))

### ⚠️ Breaking Changes

- **blocks:** changes props on the sequence functions

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 0.1.1 (2025-04-18)

### 🧱 Updated Dependencies

- Updated hass-ts to 0.3.1

## 0.1.0 (2025-04-18)

### 🚀 Features

- **blocks:** update blocks to reference the monorepo version of hass-ts ([7afd53d](https://github.com/benwainwright/hass-blocks/commit/7afd53d))
- **hass-ts:** add hass-ts to monorepo ([94599e4](https://github.com/benwainwright/hass-blocks/commit/94599e4))

### 🩹 Fixes

- **blocks:** stuff ([39118bf](https://github.com/benwainwright/hass-blocks/commit/39118bf))
- **blocks:** put old hass back for now ([957a7fc](https://github.com/benwainwright/hass-blocks/commit/957a7fc))
- **blocks:** modify release ([c736a43](https://github.com/benwainwright/hass-blocks/commit/c736a43))

### 🧱 Updated Dependencies

- Updated hass-ts to 0.3.0

### ❤️ Thank You

- Ben Wainwright @benwainwright

## 0.0.2 (2025-04-18)

### 🩹 Fixes

- **blocks:** modify release ([c736a43](https://github.com/benwainwright/hass-blocks/commit/c736a43))

### ❤️ Thank You

- Ben Wainwright @benwainwright
