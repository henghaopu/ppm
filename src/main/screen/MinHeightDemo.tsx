import React from 'react'

function MinHeightDemo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        fontSize: '18px',
      }}
    >
      <header style={{ padding: '16px', fontSize: '22px', textAlign: 'left' }}>
        Header
      </header>
      {/* expand the wrapper that contains side and main */}
      <div
        style={{
          flexGrow: 1,
          // set minHeight: 0 to the flex child that has the overflow container
          // a flex item has default min-height: auto. This means that, by default, a flex item cannot be shorter than its content
          // reference 1: https://moduscreate.com/blog/how-to-fix-overflow-issues-in-css-flex-layouts/
          // reference 2: https://developer.mozilla.org/en-US/docs/Web/CSS/flex
          // reference 3: https://medium.com/@stephenbunch/how-to-make-a-scrollable-container-with-dynamic-height-using-flexbox-5914a26ae336
          // reference 4: https://stackoverflow.com/questions/42130384/why-should-i-specify-height-0-even-if-i-specified-flex-basis-0-in-css3-flexbox
          minHeight: 0,
          // no need height: '100%' and use only height 100% won't work
          // height: '100%',

          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            padding: '16px',
            fontSize: '22px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Side
        </div>
        {/* expand main which contains title and content */}
        <main
          style={{
            // use "flexGrow: 1" or "width: '100%'" when we want to occupy the rest of the horizontal space even if there's not enough content to fill up horizontally
            flexGrow: 1,
            // width: '100%',
            padding: '16px',

            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ paddingBottom: '8px', fontSize: '18px' }}>Title</div>
          <div
            style={{
              // use "flexGrow: 1" or "height: '100%'" when we want to occupy the rest of the vertical space even if there's not enough content to scroll vertically
              flexGrow: 1,
              // height: '100%',
              border: '4px solid #Fe5c00',
              // *** enable vertical scroll
              overflowY: 'auto',
            }}
          >
            {[...Array(3).fill(0).keys()].map((item) => (
              <div key={item} style={{ textAlign: 'left' }}>
                <div style={{ paddingBottom: '16px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  sit amet eros suscipit, vehicula nibh ac, tincidunt neque. Ut
                  condimentum in ante id semper. Curabitur vestibulum, tellus
                  vel rhoncus egestas, enim justo elementum tellus, vel rutrum
                  purus libero et felis. Nam cursus dolor vel pellentesque
                  dapibus. Curabitur viverra cursus fermentum. Praesent posuere
                  auctor suscipit. Phasellus mollis ligula sit amet tellus
                  egestas luctus.
                </div>
                <div style={{ paddingBottom: '16px' }}>
                  Phasellus ullamcorper sem a dolor consequat finibus. Praesent
                  eu magna at diam tincidunt malesuada eget faucibus urna. Cras
                  fermentum, tortor sed mollis pellentesque, mi risus convallis
                  risus, non condimentum massa sem sit amet elit. Praesent
                  consectetur ligula leo, sed venenatis lectus vulputate
                  hendrerit. In hac habitasse platea dictumst. Aenean nulla
                  ligula, porta id tortor nec, molestie sagittis ipsum. Sed
                  pellentesque mauris sed lacus venenatis posuere. Vestibulum eu
                  varius nisi. In in iaculis nibh, at molestie libero. Etiam
                  eleifend semper erat commodo accumsan. Vivamus facilisis
                  ornare metus, ac tempus elit mollis semper. Duis rutrum
                  faucibus iaculis.
                </div>
                <div style={{ paddingBottom: '16px' }}>
                  Sed at dui et leo ultrices sagittis ut ac quam. Vivamus
                  consectetur mi in vestibulum auctor. Vestibulum ligula ex,
                  pellentesque sit amet nulla ac, varius finibus felis. Praesent
                  tellus tellus, pharetra ut augue in, semper feugiat odio.
                  Maecenas condimentum sapien ut libero suscipit, eu luctus
                  risus vulputate. Donec sodales, enim quis dictum ultricies,
                  diam urna dapibus lacus, vel interdum felis leo sed justo.
                  Vivamus nec dignissim felis, sit amet tristique lectus.
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <footer style={{ padding: '8px', fontSize: '14px', textAlign: 'right' }}>
        Footer
      </footer>
    </div>
  )
}

export default MinHeightDemo
