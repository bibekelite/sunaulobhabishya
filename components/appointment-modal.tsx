"use client"

import { useState } from "react"

const branches = [
  {
    name: "मित्र पार्क शाखा",
     phone: "014585797",
                whatsapp: "9851000531",
  },
  {
    name: "कोटेश्वर शाखा",
    phone: "",
                whatsapp: "9760870137",
  },
  {
    name: "हेटौंडा शाखा",
     phone: "057527325",
                whatsapp: "9855068832",
  },
  {
    name: "नारायणघाट शाखा",
     phone: "056595106",
                whatsapp: "9761734125",
  },
  {
    name: "सामाखुसी शाखा",
     phone: "014985398",
                whatsapp: "9851006564"
  },
]

export default function AppointmentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null)

  const handleBranchSelect = (branch: string) => {
    const selectedBranchData = branches.find((b) => b.name === branch)
    if (selectedBranchData) {
      const message = encodeURIComponent(`नमस्ते! म ${branch} मा अपोइन्टमेन्ट बुक गर्न चाहन्छु।`)
      window.open(`https://wa.me/${selectedBranchData.whatsapp}?text=${message}`, "_blank")
      onClose()
      setSelectedBranch(null)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl max-w-md w-full p-6 shadow-2xl">
        <h3 className="text-xl font-bold text-foreground mb-4">अपोइन्टमेन्ट बुक गर्नुहोस्</h3>
        <p className="text-sm text-muted-foreground mb-4">व्हाट्सएप मार्फत जारी राख्न तपाईंको रुचाइएको शाखा छान्नुहोस्</p>

        <div className="space-y-2 mb-6">
          {branches.map((branch) => (
            <label
              key={branch.name}
              className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <input
                type="radio"
                name="branch"
                value={branch.name}
                checked={selectedBranch === branch.name}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="w-4 h-4 text-primary"
              />
              <div className="flex-1">
                <div className="font-medium text-foreground text-sm">{branch.name}</div>
                <div className="text-xs text-muted-foreground">{branch.phone}</div>
              </div>
            </label>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              onClose()
              setSelectedBranch(null)
            }}
            className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
          >
            रद्द गर्नुहोस्
          </button>
          <button
            onClick={() => handleBranchSelect(selectedBranch || "")}
            disabled={!selectedBranch}
            className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            व्हाट्सएपमा जानुहोस्
          </button>
        </div>
      </div>
    </div>
  )
}
