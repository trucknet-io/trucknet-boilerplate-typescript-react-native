# trucknet-boilerplate-typescript-react

> Boilerplate for a new react native project on Typescript!

## Getting started

To start your new React Native project!

1. `git clone` this repository
2. `rm -rf .git`
3. `git init`
4. `git remote add origin`
5. `git flow init`
6. `nvm install`
7. Edit package.json to change name (upper-snake-case), description and git repository of the project
8. Edit app.json to change name (UpperCamelCase) and display name (Human Readable) of the project
9. Run `npx react-native eject` to build android and ios folders
10. Replace `icon.png` in the root of the project and run `npx app-icon generate`
11. Git commit, add and push your new app 😎

## Libraries

### Core libraries

- React 16.6.3
- Typescript 3.2
- React native 0.57.8

### Dev utils

- Jest
- TSLint with [Trucknet's config](https://github.com/trucknet-io/tslint-config-trucknet-io)
- Prettier with [Trucknet's config](https://github.com/trucknet-io/prettier-config-trucknet-io)
- [Trucknet's commit utils](https://github.com/trucknet-io/trucknet-commit)

## Development environment 💻

All the environment set up instructions are given for **Mac OS** or **Ubuntu 18.04**.

### VS Code

[Visual Studio Code](https://code.visualstudio.com/) is the code editor you will fall in love with!

[Download](https://code.visualstudio.com/#alt-downloads) it from the website and install.

After installation open Extensions tab and install following extensions:

- GitLens
- ESLint
- TSLint
- Prettier
- Flow

### [Optional] oh-my-zsh

[Oh my zsh](https://github.com/robbyrussell/oh-my-zsh) is a cool configuration of zsh (improved shell), which makes work in terminal more comfortable.

- **ubuntu only** `sudo apt install zsh`
- **ubuntu only** `chsh -s $(which zsh)`
- `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

### Git Flow

[Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/) is a way to organize branches of the git repository

- **ubuntu only** `sudo apt install git-flow`
- **mac only** `brew install git-flow-avh` (Install [Homebrew](https://brew.sh) first, if not installed)

After you will clone your working repository, you need to run

`git checkout master`
`git flow init`

for the first time to init Git flow inside the local repository.

### Node and NPM

[fnm](https://github.com/Schniz/fnm) is a node version manager. A tool to install and keep at the same time several versions of nodejs on your computer.

- `curl https://raw.githubusercontent.com/Schniz/fnm/master/.ci/install.sh | bash`
- Reopen terminal
- `fnm install 10.14`
- `fnm use 10.14`
- `npm update -g npm`

### iOS (Mac only)

- Just install `XCode` from Mac AppStore and open it once

### Android

- **ubuntu only** `sudo apt install openjdk-8-jdk`
- **mac only** Install [JDK (Java SE Development Kit) 8u192](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- Download [Android Studio](https://developer.android.com/studio/)
  - **ubuntu only**:
    - `sudo apt install unzip libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386`
    - `sudo unzip path-to-android-studio-linux.zip -d /opt` (Replace path-to-android-studio-linux.zip with the location of the file. If you are in the same directory use `./`. For example: `sudo unzip ./android-studio-ide-182.5199772-linux.zip -d /opt`)
    - `sudo ln -s /opt/android-studio/bin/studio.sh /usr/local/bin/android-studio`
    - `android-studio` will launch Android Studio. The wizard will be started, exit it (when exiting choose to launch wizard next time).
    - Inside Android studio welcome window use `Configure -> Create desktop entry` and check `Create the entry for all users` to create an application launcher in system menu
    - Exit Android studio and launch it from system menu
- Android SDK
  - Launch Android studio
  - If it is the first time of running Android Studio, you will see a setup wizard. Install everything it needs.
  - Open android folder inside this folder in Android Studio
  - Launch AVD Manager (icon with smartphone and android in right top corner)
  - Create a new virtual device for development using x86 image (in recommended tab)
  - Launch the virtual device

### Android troubleshooting

- `KVM is required to run this AVD. /dev/kvm device: permission denied. Grant current user access to /dev/kvm`:

`sudo apt install qemu-kvm`
`sudo adduser $(whoami) kvm`
