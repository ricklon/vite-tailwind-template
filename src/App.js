import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Hello } from '@/components/Hello';
import Greeting from '@/components/Greeting';
import IconDemo from '@/components/IconDemo';
import { Button } from '@/components/ui/button';
export default function App() {
    return (_jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center gap-4", children: [_jsx(Hello, { name: "TSX User" }), _jsx(Greeting, { who: "JSX Friend" }), _jsx(IconDemo, {}), _jsx(Button, { children: "Click me" }), _jsx("button", { className: "btn", children: "Tailwind Button" })] }));
}
