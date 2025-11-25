const Layout = ({children}: {children: React.ReactNode}) => { 
    return (
        <div className="min-h-screen flex-center w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
            {children}
        </div>
    )
}

export default Layout