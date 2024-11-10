import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface CourseworkItem {
    level: string;
    course: string;
}

interface CourseworkProps {
    coursework: CourseworkItem[];
}

export function Coursework({ coursework }: CourseworkProps) {
    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Coursework</h2>
            <div className="space-y-6">
                {coursework.map((item) => (
                    <Card key={item.level}>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold">{item.level}</h3>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                {item.course}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}