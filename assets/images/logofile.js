import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={27}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M51.108 26.396c-1.296 0-2.388-.384-3.276-1.152-.888-.792-1.332-2.04-1.332-3.744v-17L51.9.908V20.42c0 .36.096.612.288.756.216.144.48.216.792.216.192 0 .372-.012.54-.036l.576-.144v4.608a7.067 7.067 0 0 1-1.62.432c-.504.096-.96.144-1.368.144ZM34.572 26 27.336 8.252h5.94l3.492 10.656 3.6-10.656H46.2L39 26h-4.428ZM13.655 26V8.252h5.472v4.86h-.648c.024-1.008.276-1.908.756-2.7a5.686 5.686 0 0 1 1.908-1.872c.792-.456 1.608-.684 2.448-.684.624 0 1.212.096 1.764.288.576.168 1.176.456 1.8.864l-2.592 4.896c-.24-.168-.576-.312-1.008-.432a4.077 4.077 0 0 0-1.296-.216c-.408 0-.804.072-1.188.216-.36.144-.684.372-.972.684-.264.288-.48.66-.648 1.116-.12.336-.216.768-.288 1.296-.048.504-.072 1.26-.072 2.268V26h-5.436ZM9.252 26.396a7.347 7.347 0 0 1-2.88-.576c-.912-.384-1.656-1.008-2.232-1.872-.552-.888-.828-2.088-.828-3.6V4.544l5.472-2.916V18.8c0 1.056.132 1.848.396 2.376.264.528.792.792 1.584.792.24 0 .504-.024.792-.072.288-.048.6-.12.936-.216v4.14a9.245 9.245 0 0 1-3.24.576ZM.36 12.464V8.252h12.132v4.212H.36Z"
    />
  </Svg>
)
export default SvgComponent
