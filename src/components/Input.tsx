import { InputProps } from '@/type'
import Icon from '../icons'
import ErrorDescription from './ErrorDescription'
import FieldLabel from './FieldLabel'

const Input = ({ error, value, placeholder, icon = false, onChange, ...props }: InputProps) => {
    return (
        <div className="w-full relative">
            <FieldLabel
                htmlFor="input"
                className={`absolute -top-2 left-4 focus-within:text-primary-300 ${error ? 'text-error' : ''}`}
            >
                label
            </FieldLabel>
            <div
                className={`p-4 rounded-[4px] border ${
                    error ? 'border-error' : 'border-netural-400'
                } flex justify-between focus-within:border-primary-300`}
            >
                {icon && <Icon.Search fill={'#605E5E'} className="mr-4" />}
                <input
                    className="w-full placeholder:text-netural-400"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
                {value && (
                    <Icon.Cancel
                        onClick={() =>
                            onChange?.({
                                target: { value: '' },
                            } as React.ChangeEvent<HTMLInputElement>)
                        }
                        fill={'#605E5E'}
                        className="cursor-pointer"
                    />
                )}
            </div>
            <ErrorDescription error={error || ''} className="absolute -bottom-6 left-4" />
        </div>
    )
}

export default Input
