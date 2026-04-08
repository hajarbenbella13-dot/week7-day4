import React from "react";

interface ColorState {
  favoriteColor: string
}

class Color extends React.Component<{}, ColorState> {

  constructor(props: {}) {
    super(props)
    this.state = {
      favoriteColor: "red"
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
  setTimeout(() => {
    this.setState({ favoriteColor: "yellow" })
  }, 3000)
}
componentDidUpdate() {
  console.log("after update")
}
  changeColor = () => {
    this.setState({ favoriteColor: "blue" })
  }
getSnapshotBeforeUpdate() {
  console.log("in getSnapshotBeforeUpdate")
  return null
}
  render() {
    return (
      <div className="flex flex-col items-center gap-8 mt-10">
        <p>My favorite color is: {this.state.favoriteColor}</p>

        <button
          className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition"
          onClick={this.changeColor}
        >
          Change color
        </button>

      </div>
    )
  }
}

export default Color;