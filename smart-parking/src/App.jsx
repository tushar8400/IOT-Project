import Header from './components/Header' 
import StatCards from './components/StatCards'
import ParkingSlots from './components/ParkingSlots'
import GateControl from './components/GateControl'
import SystemInfo from './components/SystemInfo'
import { useParkingData } from './hooks/useParkingData'

export default function App() {
  const d = useParkingData()

  return (
    <div className="min-h-screen">
     <Header mqtt={d.mqtt} esp32={d.esp32} allOnline={d.allOnline} lastUpdate={d.lastUpdate} />

     <main className="flex flex-col gap-5 px-6 pb-10 lg:px-10">
         <StatCards
          total={d.total}
          available={d.available}
          occupied={d.occupied}
          entries={d.entries}
          exits={d.exits}
        />
        <ParkingSlots slots={d.slots} unknown={d.unknown} onRefresh={d.refresh} />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.55fr_1fr]">
          <GateControl
            gate={d.gate}
            pending={d.gatePending}
            disabled={!d.mqtt}
            onOpen={d.openGate}
            onClose={d.closeGate}
          />
          <SystemInfo mqtt={d.mqtt} esp32={d.esp32} lastUpdate={d.lastUpdate} />
        </div>
      </main>
    </div>
  )
}
