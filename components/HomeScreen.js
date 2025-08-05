// iPhone Home Screen Component - Dark Mode
// Generated from Figma design

// Placeholder images - replace with actual assets
const imgModeDark = "data:image/svg+xml,%3csvg width='393' height='852' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='bg'%3e%3cstop stop-color='%23FF6B6B' offset='0%25'/%3e%3cstop stop-color='%23A855F7' offset='50%25'/%3e%3cstop stop-color='%233B82F6' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect width='393' height='852' fill='url(%23bg)'/%3e%3c/svg%3e";
const imgLevels = "data:image/svg+xml,%3csvg width='143' height='54' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='white'%3e%3ccircle cx='120' cy='27' r='3'/%3e%3ccircle cx='105' cy='27' r='2'/%3e%3ccircle cx='90' cy='27' r='2'/%3e%3ccircle cx='75' cy='27' r='2'/%3e%3crect x='130' y='20' width='10' height='14' rx='2'/%3e%3c/g%3e%3c/svg%3e";

// App icon placeholder generator
const createAppIcon = (color, icon) => `data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='60' height='60' rx='14' fill='${encodeURIComponent(color)}'/%3e%3ctext x='30' y='38' text-anchor='middle' fill='white' font-size='24'%3e${encodeURIComponent(icon)}%3c/text%3e%3c/svg%3e`;

const appIcons = {
    facetime: createAppIcon('#00C853', '📹'),
    calendar: createAppIcon('#FF3B30', '📅'),
    photos: createAppIcon('#FF9500', '🖼️'),
    camera: createAppIcon('#8E8E93', '📷'),
    mail: createAppIcon('#007AFF', '✉️'),
    notes: createAppIcon('#FF9500', '📝'),
    reminders: createAppIcon('#FF3B30', '☑️'),
    clock: createAppIcon('#FFFFFF', '🕐'),
    news: createAppIcon('#FF3B30', '📰'),
    tv: createAppIcon('#000000', '📺'),
    podcasts: createAppIcon('#8B5CF6', '🎙️'),
    appstore: createAppIcon('#007AFF', '📱'),
    maps: createAppIcon('#34C759', '🗺️'),
    health: createAppIcon('#FF3B30', '❤️'),
    wallet: createAppIcon('#000000', '💳'),
    settings: createAppIcon('#8E8E93', '⚙️'),
    phone: createAppIcon('#34C759', '📞'),
    safari: createAppIcon('#007AFF', '🧭'),
    messages: createAppIcon('#34C759', '💬'),
    music: createAppIcon('#FF3B30', '🎵')
};

function HomeScreenIPhone({ mode = "Dark" }) {
    if (mode === 'Dark') {
        return (
            <div 
                className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-2.5 items-center justify-start p-0 relative size-full" 
                data-name="Mode=Dark" 
                style={{ backgroundImage: `url('${imgModeDark}')` }}
            >
                {/* Status Bar */}
                <div className="box-border content-stretch flex flex-row gap-28 h-[54px] items-start justify-start p-0 relative shrink-0 w-[393px]" data-name="Status Bar">
                    <div className="h-[54px] relative shrink-0 w-[138px]" data-name="Time">
                        <div className="absolute font-['SF_Pro:Semibold',_sans-serif] inset-[33.96%_36.23%_25.3%_36.96%] leading-[0] not-italic text-[#ffffff] text-[17px] text-center">
                            <p className="block leading-[22px]">9:41</p>
                        </div>
                    </div>
                    <div className="h-[54px] relative shrink-0 w-[143px]" data-name="Levels">
                        <img alt="" className="block max-w-none size-full" src={imgLevels}/>
                    </div>
                </div>

                {/* App Icons Grid */}
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="App Icons">
                    {/* Row 1 */}
                    <div className="absolute h-[79px] left-[31px] top-[26px] w-[331px]" data-name="Row 1">
                        <AppIcon left={0} icon={appIcons.facetime} label="FaceTime" />
                        <AppIcon left={90.33} icon="calendar" isCalendar={true} />
                        <AppIcon left={180.66} icon={appIcons.photos} label="Photos" />
                        <AppIcon left={270.99} icon={appIcons.camera} label="Camera" />
                    </div>

                    {/* Row 2 */}
                    <div className="absolute h-[79px] left-[31px] top-[124px] w-[331px]" data-name="Row 2">
                        <AppIcon left={0} icon={appIcons.mail} label="Mail" />
                        <AppIcon left={90.33} icon={appIcons.notes} label="Notes" />
                        <AppIcon left={180.66} icon={appIcons.reminders} label="Reminders" />
                        <AppIcon left={270.99} icon={appIcons.clock} label="Clock" />
                    </div>

                    {/* Row 3 */}
                    <div className="absolute h-[79px] left-[31px] top-[222px] w-[331px]" data-name="Row 3">
                        <AppIcon left={0} icon={appIcons.news} label="News" />
                        <AppIcon left={90.33} icon={appIcons.tv} label="TV" />
                        <AppIcon left={180.66} icon={appIcons.podcasts} label="Podcasts" />
                        <AppIcon left={270.99} icon={appIcons.appstore} label="App Store" />
                    </div>

                    {/* Row 4 */}
                    <div className="absolute h-[79px] left-[31px] top-80 w-[331px]" data-name="Row 4">
                        <AppIcon left={0} icon={appIcons.maps} label="Maps" />
                        <AppIcon left={90.33} icon={appIcons.health} label="Health" />
                        <AppIcon left={180.67} icon={appIcons.wallet} label="Wallet" />
                        <AppIcon left={271} icon={appIcons.settings} label="Settings" />
                    </div>

                    {/* Row 5 */}
                    <div className="absolute h-[79px] left-[31px] top-[418px] w-[331px]" data-name="Row 5">
                        <AppIcon left={0} icon={createAppIcon('#E5E5E7', '+')} label="App Name" />
                    </div>
                </div>

                {/* Search Field */}
                <div className="backdrop-blur-[25px] backdrop-filter bg-[rgba(37,37,37,0.55)] box-border content-stretch flex flex-row gap-2.5 h-[30px] items-start justify-start overflow-clip px-[11px] py-[7px] relative rounded-[100px] shrink-0" data-name="Search Field">
                    <div className="font-['SF_Pro:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.4px]">
                        <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">🔍 Search</p>
                    </div>
                </div>

                {/* Dock */}
                <div className="box-border content-stretch flex flex-row items-center justify-center px-[11px] py-3 relative rounded-[41px] shrink-0 w-[393px]" data-name="Dock">
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                        <div className="backdrop-blur-[25px] backdrop-filter basis-0 bg-[rgba(37,37,37,0.55)] box-border content-stretch flex flex-row gap-[30px] grow h-full items-center justify-center min-h-px min-w-px px-0 py-[19px] relative rounded-[41px] shrink-0" data-name="Background">
                            <DockApp icon={appIcons.phone} />
                            <DockApp icon={appIcons.safari} />
                            <DockApp icon={appIcons.messages} />
                            <DockApp icon={appIcons.music} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function AppIcon({ left, icon, label, isCalendar = false }) {
    return (
        <div className="absolute box-border content-stretch flex flex-col gap-[5px] items-center justify-start p-0 top-0 w-[60px]" style={{ left: `${left}px` }}>
            <div className="relative shrink-0 size-[60px]" data-name="Frame">
                {isCalendar ? (
                    <div className="absolute bg-[#ffffff] leading-[0] left-0 not-italic overflow-clip rounded-[14px] size-[60px] text-center text-nowrap top-0" data-name="App Icon">
                        <div className="absolute font-['SF_Pro:Light',_sans-serif] inset-[21.67%_30%_3.33%_31.67%] text-[37.5px] text-neutral-800">
                            <p className="block leading-[normal] text-nowrap whitespace-pre">6</p>
                        </div>
                        <div className="absolute bottom-[69.44%] font-['SF_Pro:Bold',_sans-serif] left-[26.67%] right-1/4 text-[#ff3a2f] text-[11.5px] top-[7.22%]">
                            <p className="block leading-[normal] text-nowrap whitespace-pre">MON</p>
                        </div>
                    </div>
                ) : (
                    <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
                        <img src={icon} alt={label} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                )}
            </div>
            {label && (
                <div className="font-['SF_Pro:Regular',_sans-serif] h-3.5 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap w-full">
                    <p className="block leading-[normal] overflow-inherit">{label}</p>
                </div>
            )}
        </div>
    );
}

function DockApp({ icon }) {
    return (
        <div className="relative shrink-0 size-[60px]">
            <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0">
                <img src={icon} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
        </div>
    );
}

function IPhoneHomeScreenDark() {
    return (
        <div className="relative size-full" data-name="iPhone - Home Screen - Dark">
            <div className="absolute bg-center bg-cover bg-no-repeat bottom-0 box-border content-stretch flex flex-col gap-2.5 items-center justify-start left-1/2 overflow-clip p-0 top-0 translate-x-[-50%]" data-name="Home Screen - iPhone">
                <HomeScreenIPhone mode="Dark"/>
            </div>
        </div>
    );
}