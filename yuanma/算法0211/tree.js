  //             A
  //           /   \
  //         B       G
  //        / \     / \
  //       C   F   H   I
  //      / \
  //     D   E
  //          \
  //           j

  export const tree = {
    value: 'A',
    left: {
      value: 'B',
      left: {
        value: 'C',
        left: {
          value: 'D'
        },
        right: {
          value: 'E',
          right: {
            value: 'J'
          }
        }
      },
      right: {
        value: 'F'
      }
    },
    right: {
      value: 'G', 
      left: {
        value: 'H'
      },
      right: {
        value: 'I'
      }
    }
  }
  