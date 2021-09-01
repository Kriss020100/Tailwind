module.exports = {
    purge: ['./public/**/*.html'],
    darkMode: "class", // or 'media' or 'class'
    theme: {
      colors: { //merubah utility default
        // black: "#000",
        // red:{
        //   500: "#DC2626",
        //   400: "#891C1C",

        orange: '#FF7143',
        "orangedark":"#9F3919",
        darkblue: '#5454D4',
        black: '#19191B',
        grey: '#696871',
        "grey-light": "#e7e7e7",
        white: "#FFFFFF",
        "white-light":"#F7F7FB",
        "white-ligher":"#F8F8F8",
        transparent: "transparent"
        
        // extend: {//menambah utility default
        //     colors:{
          //       blue: "#1E48AF",
          //       gray:{
            //         500: "#687288",
            //         400: "#485563",
            //       },
            //     },
            //   },
            // },
          },
          fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
             'base': '1rem',
             'lg': '1.125rem',
             'xl': '1.25rem',
             '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
             '5xl': '3rem',
             '6xl': '3.75rem',
            '7xl': '5rem',
           },
            // extend: {},
    },
    variants: {},
    plugins: [],
  };