"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, ArrowRight, Upload, FileText, CheckCircle, AlertCircle, Camera, ImageIcon } from "lucide-react"
import Link from "next/link"

const accountTypeNames = {
  savings: "Savings Account",
  current: "Current Account",
  salary: "Salary Account",
  student: "Student Account",
}

const requiredDocuments = {
  savings: [
    { id: "pan", name: "PAN Card", description: "Clear photo of your PAN card", required: true },
    { id: "aadhar", name: "Aadhar Card", description: "Front and back of Aadhar card", required: true },
    { id: "photo", name: "Passport Photo", description: "Recent passport size photograph", required: true },
    { id: "signature", name: "Signature", description: "Clear signature on white paper", required: true },
  ],
  current: [
    { id: "pan", name: "PAN Card", description: "Clear photo of your PAN card", required: true },
    { id: "aadhar", name: "Aadhar Card", description: "Front and back of Aadhar card", required: true },
    { id: "photo", name: "Passport Photo", description: "Recent passport size photograph", required: true },
    { id: "signature", name: "Signature", description: "Clear signature on white paper", required: true },
    { id: "business", name: "Business Registration", description: "Business registration certificate", required: true },
    { id: "income", name: "Income Proof", description: "Latest salary slip or ITR", required: true },
  ],
  salary: [
    { id: "pan", name: "PAN Card", description: "Clear photo of your PAN card", required: true },
    { id: "aadhar", name: "Aadhar Card", description: "Front and back of Aadhar card", required: true },
    { id: "photo", name: "Passport Photo", description: "Recent passport size photograph", required: true },
    { id: "signature", name: "Signature", description: "Clear signature on white paper", required: true },
    {
      id: "salary",
      name: "Salary Certificate",
      description: "Latest salary certificate from employer",
      required: true,
    },
  ],
  student: [
    { id: "pan", name: "PAN Card", description: "Clear photo of your PAN card", required: false },
    { id: "aadhar", name: "Aadhar Card", description: "Front and back of Aadhar card", required: true },
    { id: "photo", name: "Passport Photo", description: "Recent passport size photograph", required: true },
    { id: "signature", name: "Signature", description: "Clear signature on white paper", required: true },
    { id: "student", name: "Student ID", description: "Valid student ID or admission letter", required: true },
  ],
}

interface UploadedFile {
  file: File
  preview: string
  status: "uploading" | "success" | "error"
}

export default function DocumentsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const accountType = searchParams.get("type") || "savings"

  const [uploadedFiles, setUploadedFiles] = useState<Record<string, UploadedFile>>({})
  const [formData, setFormData] = useState<any>(null)

  useEffect(() => {
    // Load form data from previous step
    const savedData = localStorage.getItem("accountFormData")
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const documents = requiredDocuments[accountType as keyof typeof requiredDocuments] || requiredDocuments.savings

  const handleFileUpload = (documentId: string, file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
      alert("File size should be less than 5MB")
      return
    }

    const preview = URL.createObjectURL(file)
    setUploadedFiles((prev) => ({
      ...prev,
      [documentId]: {
        file,
        preview,
        status: "uploading",
      },
    }))

    // Simulate upload process
    setTimeout(() => {
      setUploadedFiles((prev) => ({
        ...prev,
        [documentId]: {
          ...prev[documentId],
          status: "success",
        },
      }))
    }, 2000)
  }

  const removeFile = (documentId: string) => {
    setUploadedFiles((prev) => {
      const newFiles = { ...prev }
      if (newFiles[documentId]) {
        URL.revokeObjectURL(newFiles[documentId].preview)
        delete newFiles[documentId]
      }
      return newFiles
    })
  }

  const canProceed = () => {
    const requiredDocs = documents.filter((doc) => doc.required)
    return requiredDocs.every((doc) => uploadedFiles[doc.id]?.status === "success")
  }

  const handleSubmit = () => {
    if (canProceed()) {
      // Store document info for next step
      const documentData = Object.keys(uploadedFiles).reduce(
        (acc, key) => {
          acc[key] = {
            fileName: uploadedFiles[key].file.name,
            fileSize: uploadedFiles[key].file.size,
            status: uploadedFiles[key].status,
          }
          return acc
        },
        {} as Record<string, any>,
      )

      localStorage.setItem("accountDocuments", JSON.stringify(documentData))
      router.push(`/open-account/terms?type=${accountType}`)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Link href={`/open-account/personal-info?type=${accountType}`}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-heading font-bold">
                  Open {accountTypeNames[accountType as keyof typeof accountTypeNames]}
                </h1>
                <p className="text-muted-foreground">Step 3 of 4: Document Upload</p>
              </div>
            </div>
            <Progress value={75} className="h-2" />
          </div>

          {/* Instructions */}
          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Please upload clear, readable photos of your documents. All images should be in JPG, PNG, or PDF format
              and less than 5MB each.
            </AlertDescription>
          </Alert>

          {/* Document Upload Cards */}
          <div className="space-y-6">
            {documents.map((document) => (
              <Card key={document.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {document.name}
                      {document.required && <span className="text-red-500">*</span>}
                    </div>
                    {uploadedFiles[document.id]?.status === "success" && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{document.description}</p>
                </CardHeader>
                <CardContent>
                  {!uploadedFiles[document.id] ? (
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="p-3 rounded-full bg-muted">
                          <Upload className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Upload {document.name}</p>
                          <p className="text-sm text-muted-foreground mb-4">Drag and drop or click to browse</p>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) handleFileUpload(document.id, file)
                            }}
                            className="hidden"
                            id={`upload-${document.id}`}
                          />
                          <div className="flex gap-2 justify-center">
                            <Button
                              variant="outline"
                              onClick={() => document.getElementById(`upload-${document.id}`)?.click()}
                            >
                              <ImageIcon className="h-4 w-4 mr-2" />
                              Choose File
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => {
                                // In a real app, this would open camera
                                document.getElementById(`upload-${document.id}`)?.click()
                              }}
                            >
                              <Camera className="h-4 w-4 mr-2" />
                              Take Photo
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        {uploadedFiles[document.id].file.type.startsWith("image/") && (
                          <img
                            src={uploadedFiles[document.id].preview || "/placeholder.svg"}
                            alt="Preview"
                            className="w-16 h-16 object-cover rounded"
                          />
                        )}
                        <div className="flex-1">
                          <p className="font-medium">{uploadedFiles[document.id].file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(uploadedFiles[document.id].file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                          {uploadedFiles[document.id].status === "uploading" && (
                            <p className="text-sm text-blue-500">Uploading...</p>
                          )}
                          {uploadedFiles[document.id].status === "success" && (
                            <p className="text-sm text-green-500 flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              Upload successful
                            </p>
                          )}
                        </div>
                        <Button variant="outline" size="sm" onClick={() => removeFile(document.id)}>
                          Remove
                        </Button>
                      </div>

                      {/* Option to upload another file */}
                      <div className="text-center">
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) handleFileUpload(document.id, file)
                          }}
                          className="hidden"
                          id={`reupload-${document.id}`}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => document.getElementById(`reupload-${document.id}`)?.click()}
                        >
                          Upload Different File
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upload Tips */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg">Document Upload Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ensure all text in the documents is clearly visible and readable</li>
                <li>• Avoid shadows, glare, or blurred images</li>
                <li>• Make sure the entire document is visible in the frame</li>
                <li>• Use good lighting when taking photos</li>
                <li>• Accepted formats: JPG, PNG, PDF (max 5MB each)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8">
            <Link href={`/open-account/personal-info?type=${accountType}`}>
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Personal Info
              </Button>
            </Link>
            <Button onClick={handleSubmit} disabled={!canProceed()} size="lg">
              Continue to Terms
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
