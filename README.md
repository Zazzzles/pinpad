# Pincode screen for react native

> A simple passcode screen for android and ios.

![Example](https://media.giphy.com/media/3JQzEO3vRRP21w8mnT/giphy.gif)

## Code Samples

```
    import Pinpad from './src/Pinpad'


    export default class App extends React.Component {
        render() {
            return (
            <View style={styles.container}>
                <Pinpad
                pin={[1,2,3,4]}
                onCorrect={() => console.log("Correct!")}
                onIncorrect={() => console.log("Incorrect!")}
                />
            </View>
            );
        }
    }
```

## Usage

| prop        | default                   | description                    | required |
| ----------- | ------------------------- | ------------------------------ | -------- |
| pin         | [1,2,3,4]                 | The pin to be verified against | true     |
| onCorrect   | console.log("Correct!")   | On correct callback            | true     |
| onIncorrect | console.log("Incorrect1") | On incorrect callback          | false    |

## Installation

> This project requires expo to run. You can get it [here](https://docs.expo.io/versions/latest/introduction/installation).

## Starting the project

`npm run start`

or if you're using yarn

`yarn start`

## Pull Requests

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature
4. Submit a pull request
