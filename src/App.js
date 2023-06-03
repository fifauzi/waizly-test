import React from 'react';

class MinMaxSum extends React.Component {
  findMinMaxSum(int) {
    int.sort((a, b) => a - b); // Sort the integers in ascending order
    const minSum = int.slice(0, 4).reduce((sum, num) => sum + num, 0); // Sum of the first four integers
    const maxSum = int.slice(1).reduce((sum, num) => sum + num, 0); // Sum of the last four integers
    return [minSum, maxSum];
  }

  render() {
    const int = [5, 2, 8, 1, 9];
    const [minSum, maxSum] = this.findMinMaxSum(int);

    return (
      <div>
        <p>Minimum Sum: {minSum}</p>
        <p>Maximum Sum: {maxSum}</p>
      </div>
    );
  }
}

export default MinMaxSum;
