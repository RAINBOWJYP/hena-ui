import { DividerProps } from '@/type'
import { generateUtilityClasses } from '../utils/generateUtilityClasses'

const test = generateUtilityClasses('hena', [
    'horizontal',
    'vertical',
    'middle',
    'full',
])

const Divider = ({
    orientation = 'horizontal',
    variant = 'full',
}: DividerProps) => {
    const orientationClass =
        orientation === 'horizontal' ? 'w-full h-[1px]' : 'h-full w-[1px]'
    const variantClass = variant === 'middle' ? 'mt-2 mb-2' : 'ml-2 mr-2'

    // 부모의 height 값 확인
    const parentHeight =
        typeof window !== 'undefined'
            ? window.getComputedStyle(document.body).height
            : 'auto'
    const shouldRender =
        orientation === 'vertical' ? true : parentHeight !== 'auto' // 수정: 수직일 경우 항상 그려지도록 설정
    console.log(test)
    if (shouldRender) {
        return (
            <div
                className={`bg-netural-200 ${orientationClass} ml-1 mr-1 ${variantClass}`}
            ></div>
        )
    }
    return null // 조건에 따라 null 반환
}

export default Divider
