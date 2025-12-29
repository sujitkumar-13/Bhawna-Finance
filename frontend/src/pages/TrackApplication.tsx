import { TrackingHero } from "../components/TrackingHero";
import { TrackingFormSection } from "../components/TrackingFormSection";

export const TrackApplication = () => {
    return (
        <main className="box-border  pt-20">
            <TrackingHero />
            <TrackingFormSection />
        </main>
    );
};
