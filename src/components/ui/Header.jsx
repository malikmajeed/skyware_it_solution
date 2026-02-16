import React from 'react'

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Skyware" width={100} height={100} />
                </div>
            </div>
        </div>
    </header>
  )
}
