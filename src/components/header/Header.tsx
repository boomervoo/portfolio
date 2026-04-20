'use client'

import Button from "@/components/ui/Button";

export default function Header () {
    const headerMenu = [
        {
            id: 'about',
            label: 'Обо мне',
        },
        {
            id: 'contact',
            label: 'мой опыт',
        },
        {
            id: 'keys',
            label: 'Кейсы'
        },
    ]
    return (
        <header className="py-8 w-full flex justify-between items-center gap-6">
            <span className="uppercase font-jost text-4xl text-black">Татьяна Попова</span>
            <div className="flex items-center gap-10">
                {
                    headerMenu.map((item) => {
                        return (
                            <Button
                                key={item.id}
                                className="uppercase rounded-[1px] bg-black text-black cursor-pointer border-gray-600 py-2 px-6 transition ease-in-out duration-500"
                                text={item.label}
                                id={item.id}
                            />
                        )
                    })
                }
            </div>
        </header>
    )
}
