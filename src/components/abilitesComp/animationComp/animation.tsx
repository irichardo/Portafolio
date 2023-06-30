interface colorStyles{
  colorBase:String,
  saturation:String
}

type circleComp = {
  backgroundColor: colorStyles
  fromColor: colorStyles
  viaColor: colorStyles
  toColor: colorStyles
  mainColor:String
  message:String
};

export default function AnimationCircleComp ({ backgroundColor, fromColor, viaColor, toColor, mainColor, message }:circleComp) {
  console.log(backgroundColor.colorBase, backgroundColor.saturation)
  // , fromColor.colorBase, fromColor.saturation, viaColor.colorBase, viaColor.saturation, toColor, mainColor, message);

  return (
    <div className='h-[20vh] w-[20vh] items-center rounded-f justify-center flex text-xl relative' style={{ backgroundColor: `${backgroundColor.colorBase}` }}>
      <div className={`absolute inset-2 animate-spin bg-gradient-to-tr  from-${fromColor.colorBase} via-blue-50 to-${toColor?.colorBase}-${toColor?.saturation} rounded-full`} />
      <div className={`${mainColor} w-[85%] h-[85%] absolute justify-center items-center flex rounded-full`}>
        {message}
      </div>
    </div>
  )
}
