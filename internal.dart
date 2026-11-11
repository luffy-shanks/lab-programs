
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    home: StudyTracker(),
  ));
}

class StudyTracker extends StatefulWidget {
  @override
  State<StudyTracker> createState() => _StudyTrackerState();
}

class _StudyTrackerState extends State<StudyTracker> {
  int total = 5;
  int completed = 0;
  bool started = false;

  TextEditingController controller =
      TextEditingController(text: '5');

  void startTracking() {
    int? sessions = int.tryParse(controller.text);

    if (sessions != null && sessions > 0) {
      setState(() {
        total = sessions;
        completed = 0;
        started = true;
      });
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Enter a valid number')),
      );
    }
  }

  void completeSession() {
    if (completed < total) {
      setState(() {
        completed++;
      });
    }
  }

  void resetTracker() {
    setState(() {
      total = 5;
      completed = 0;
      started = false;
      controller.text = '5';
    });
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Study Tracker'),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
      ),

      body: Center(
        child: Padding(
          padding: EdgeInsets.all(20),

          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [

              Icon(
                Icons.menu_book,
                size: 60,
                color: Colors.blue,
              ),

              SizedBox(height: 20),

              Text(
                'Set Your Study Goal',
                style: TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                ),
              ),

              SizedBox(height: 15),

              TextField(
                controller: controller,
                keyboardType: TextInputType.number,
                enabled: !started,
                decoration: InputDecoration(
                  labelText: 'Total Study Sessions',
                  border: OutlineInputBorder(),
                ),
              ),

              SizedBox(height: 15),

              if (!started)
                ElevatedButton(
                  onPressed: startTracking,
                  child: Text('Start Tracking'),
                ),

              if (started) ...[

                Text('Completed Sessions: $completed'),

                SizedBox(height: 10),

                Text('Remaining Sessions: ${total - completed}'),

                SizedBox(height: 20),

                ElevatedButton(
                  onPressed: completed < total
                      ? completeSession
                      : null,
                  child: Text(
                    completed < total
                        ? 'Complete Session'
                        : 'Goal Completed!',
                  ),
                ),

                SizedBox(height: 10),

                ElevatedButton(
                  onPressed: resetTracker,
                  child: Text('Reset Tracker'),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}
